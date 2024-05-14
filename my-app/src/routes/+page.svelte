<!-- js -->
<script>
    import { firebaseConfig } from "$lib/firebaseConfig";
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, writeBatch } from "firebase/firestore";
    import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged } from "firebase/auth";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, "todos");
    //const provider = new GoogleAuthProvider();
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
<div class="bg">
<div class="overlay">

    <div class="topnav">
        <span style="font-size: 20px;">To-Do Tracker</span>
        <div class="right">
        {#if loggedIn}
            <div>
                Logged in as <span style="font-weight:bold">{userName} ({userEmail})</span>
                <button style="padding-left:10px; border: none; cursor: pointer; appearance: none; background-color: inherit;" on:click={logout}><img src="https://static-00.iconduck.com/assets.00/logout-icon-2048x2046-yqonjwjv.png" width="15px"></button>
            </div>
        {:else}
            <div>
                <button style="margin-top: -6px;" class="gsi-material-button" on:click={login}>
                    <div class="gsi-material-button-state"></div>
                    <div class="gsi-material-button-content-wrapper">
                        <div class="gsi-material-button-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                      </div>
                      <span class="gsi-material-button-contents">Sign in with Google</span>
                      <span style="display: none;">Sign in with Google</span>
                    </div>
                </button>
            </div>
        {/if}
        </div>
    </div>

    <br><br>
{#if loggedIn}
    <div class="center" style="width:50%;">
        <div style="width: fit-content; margin: 0 auto;">
            <input class="inputs" type="text" placeholder="Add Task" bind:value={task}>
            <button class="buttons" on:click={addTodo}>Add</button>
        </div> 
        <ol>
            {#each todos as item}
                <li class="list">
                    <a href="#" on:click={() => markDone(item)} class:done={item.isDone}>{item.task}</a>
                    <span class="right">
                        <button class="buttons" on:click={() => markDone(item)}>✓</button>
                        <button class="buttons" on:click={() => deleteTodo(item)}>X</button>
                        <button class="buttons" on:click={() => moveUp(item)}>^</button>
                        <button class="buttons" on:click={() => moveDown(item)}>v</button>
                    </span>
                </li>
            {:else}
                <p>No tasks found</p>
            {/each}
        </ol>
    </div>
{:else}
    <div class="center">
        Please log in to access your To-Do list.
    </div>
{/if}

</div>
</div>

<svelte:window on:keydown={keyPressed}></svelte:window>

<!-- css -->
<style>
    .inputs {
        background-color: transparent;
        border-color: transparent;
        border-bottom: 1px solid white;
        padding: 5px;
        color: white;
    }::placeholder{
        color:white;
    }
    button {
        cursor: pointer;
        padding:8px; 
        padding-left:15px; 
        padding-right:15px; 
        background-color: transparent; 
        color:white; 
        border: solid 2px white; 
        border-radius: 5px;
    }
    .topnav {
        background-color: rgba(40, 40, 40, 0.4);  
        backdrop-filter: blur(4px);
        padding: 20px;;
        margin-top: -9px;
        margin-left: -10px;
        height: 25px;
    }

    .bg {
        padding: 15px;
        margin: -15px;
        background: linear-gradient(45deg, red, blue, orange, green);
        animation: background 5s ease-in-out infinite;
        background-size: 300% 300%;
        height: 100%;
        width: 100%;
        position: fixed;
        font-family: 'Open Sans';
    }
    .overlay {
        padding: 15px;
        margin: -15px;
        background-image: radial-gradient(transparent 2px, black 2px);
        background-size: 30px 30px;
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
    .list {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .center {
        width: fit-content;
        margin: 0 auto;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.12);  
        backdrop-filter: blur(2px);
        border-radius: 5px;
    }
    .right {
        position: relative;
        float: right;
    }

    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        opacity: 0.5;
    }

    .gsi-material-button {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -webkit-appearance: none;
        background-color: #131314;
        background-image: none;
        border: 1px solid #747775;
        -webkit-border-radius: 20px;
        border-radius: 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #e3e3e3;
        cursor: pointer;
        font-family: 'Roboto', arial, sans-serif;
        font-size: 14px;
        height: 40px;
        letter-spacing: 0.25px;
        outline: none;
        overflow: hidden;
        padding: 0 12px;
        position: relative;
        text-align: center;
        -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
        transition: background-color .218s, border-color .218s, box-shadow .218s;
        vertical-align: middle;
        white-space: nowrap;
        width: auto;
        max-width: 400px;
        min-width: min-content;
        border-color: #8e918f;
    }
    .gsi-material-button .gsi-material-button-icon {
        height: 20px;
        margin-right: 12px;
        min-width: 20px;
        width: 20px;
    }
    .gsi-material-button .gsi-material-button-content-wrapper {
        -webkit-align-items: center;
        align-items: center;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
        height: 100%;
        justify-content: space-between;
        position: relative;
        width: 100%;
    }
    .gsi-material-button .gsi-material-button-contents {
        -webkit-flex-grow: 1;
        flex-grow: 1;
        font-family: 'Roboto', arial, sans-serif;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .gsi-material-button .gsi-material-button-state {
        -webkit-transition: opacity .218s;
        transition: opacity .218s;
        bottom: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
    .gsi-material-button:disabled {
        cursor: default;
        background-color: #13131461;
        border-color: #8e918f1f;
    }
    .gsi-material-button:disabled .gsi-material-button-state {
        background-color: #e3e3e31f;
    }
    .gsi-material-button:disabled .gsi-material-button-contents {
        opacity: 38%;
    }
    .gsi-material-button:disabled .gsi-material-button-icon {
        opacity: 38%;
    }
    .gsi-material-button:not(:disabled):active .gsi-material-button-state, 
    .gsi-material-button:not(:disabled):focus .gsi-material-button-state {
        background-color: white;
        opacity: 12%;
    }
    .gsi-material-button:not(:disabled):hover {
        -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
    }
    .gsi-material-button:not(:disabled):hover .gsi-material-button-state {
        background-color: white;
        opacity: 8%;
    }

</style>