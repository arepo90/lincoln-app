<!-- js -->
<script>
    import { firebaseConfig } from "$lib/firebaseConfig";
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, writeBatch } from "firebase/firestore";
    import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged } from "firebase/auth";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, "todos");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.useDeviceLanguage();

    let count = 0;
    let todos = [];
    let task = "";
    let loggedIn = false;
    let uid;
    let userName;
    let userEmail;

    onAuthStateChanged(auth, (user) => {
        if(user){
            uid = user.uid;
            userEmail = user.email;
            userName = user.displayName;
            loggedIn = true;
            let docCount = 0;
            const getDoc = onSnapshot(colRef, (querySnapshot) => {
                todos = [];
                querySnapshot.forEach((doc) => {
                    if(doc.data().author == uid){
                        let todo = {id: doc.id, ...doc.data()};
                        todos = [todo, ...todos];
                    }
                });
                count = todos.length;
                todos.sort(function(a, b){
                    return b.order - a.order;
                });
            });
        }
    })

    const login = () => {
        signInWithPopup(auth, new GoogleAuthProvider());
    }

   const logout = () => {
        signOut(auth);
        loggedIn = false;
        uid = "";
        todos = [];
        count = 0;
   }

    const addTodo = async() => {
        if(task === "") return;
        await addDoc(colRef, {
            order: count+1,
            task: task,
            isDone: false,
            createdAt: new Date(),
            author: uid
        });
        task = "";
    };

    const markDone = async(item) => {
        await updateDoc(doc(db, "todos", item.id), {
            isDone: !item.isDone
        });
    };

    const deleteTodo = async(item) => {
        let temp = item.order;
        const batch = writeBatch(db);
        await deleteDoc(doc(db, "todos", item.id));
        for(let i = count; i >= temp; i--){
            const tempRef = doc(db, "todos", todos[count-i].id);
            batch.update(tempRef, {order: todos[count-i].order-1})
        }
        await batch.commit();
    }

    const moveUp = async(item) => {
        if(item.order == count) return;
        let upper = todos.find(({order}) => order == item.order+1);
        const batch = writeBatch(db);
        const tempRef1 = doc(db, "todos", item.id);
        batch.update(tempRef1, {order: item.order+1});
        const tempRef2 = doc(db, "todos", upper.id);
        batch.update(tempRef2, {order: upper.order-1});
        await batch.commit();
    };

    const moveDown = async(item) => {
        if(item.order == 1) return;
        let lower = todos.find(({order}) => order == item.order-1);
        const batch = writeBatch(db);
        const tempRef1 = doc(db, "todos", item.id);
        batch.update(tempRef1, {order: item.order-1});
        const tempRef2 = doc(db, "todos", lower.id);
        batch.update(tempRef2, {order: lower.order+1});
        await batch.commit();
    };

    const keyPressed = (e) => {
        if(e.key === "Enter"){
            addTodo();
        }
    }
</script>

<!-- html -->
<div class="header">
<div class="overlay">

{#if loggedIn}
    <p>logged in as {userName} ({userEmail})</p>
    <button on:click={logout}>Logout</button>
    
<hr>

<input type="text" placeholder="Add Task" bind:value={task}>
<button on:click={addTodo}>Add</button>

<ol>
    {#each todos as item}
        <li>
            <a href="#" on:click={() => markDone(item)} class:done={item.isDone}>{item.task}</a>
            <span>
                <button on:click={() => markDone(item)}>✓</button>
                <button on:click={() => deleteTodo(item)}>X</button>
                <button on:click={() => moveUp(item)}>^</button>
                <button on:click={() => moveDown(item)}>v</button>
            </span>
        </li>
    {:else}
        <p>No tasks found</p>
    {/each}
</ol>
{:else}
    <p>Not logged in</p>
    <button on:click={login}>Login with Google</button>
{/if}

</div>
</div>

<svelte:window on:keydown={keyPressed}></svelte:window>

<!-- css -->
<style>
    .header {
        padding: 15px;
        margin: -15px;
        background: linear-gradient(45deg, red, blue);
        animation: background 12s ease-in-out infinite;
        background-size: 300% 300%;
        height: 100%;
        width: 100%;
        position: fixed;
    }

    .overlay {
        /*background: linear-gradient(red, blue);*/
        /*background: linear-gradient(45deg, rgb(210, 0, 26), rgb(116, 98, 255), rgb(244, 142, 33), rgb(25, 213, 171));
        animation: background 12s ease-in-out infinite;
        background-size: 300% 300%;*/
        padding: 15px;
        margin: -15px;
        background-image: radial-gradient(transparent 3px, black 3px);
        background-size: 40px 40px;
        height: 100%;
        width: 100%;
        position: fixed;
        color: white;
    }

    @keyframes background {
        0%{
            background-position: 0 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0 50%;
        }
    }

    .done {
        text-decoration: line-through;
        color: gray;
    }

    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        opacity: 0.5;
    }
</style>