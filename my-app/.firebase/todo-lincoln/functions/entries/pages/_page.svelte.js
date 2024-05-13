import { c as create_ssr_component, e as escape, f as add_attribute, h as each } from "../../chunks/ssr.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVBBTFrSdbPkUvoSZKyGcJGRuLkUzQNE8",
  authDomain: "todo-lincoln.firebaseapp.com",
  projectId: "todo-lincoln",
  storageBucket: "todo-lincoln.appspot.com",
  messagingSenderId: "129836527279",
  appId: "1:129836527279:web:6eebe08ee1bc343bb46e5a"
};
const css = {
  code: ".header.s-y_bCXRrkrYfP{padding:15px;margin:-15px;background:linear-gradient(45deg, red, blue);animation:s-y_bCXRrkrYfP-background 12s ease-in-out infinite;background-size:300% 300%;height:100%;width:100%;position:fixed}.overlay.s-y_bCXRrkrYfP{padding:15px;margin:-15px;background-image:radial-gradient(transparent 3px, black 3px);background-size:40px 40px;height:100%;width:100%;position:fixed;color:white}@keyframes s-y_bCXRrkrYfP-background{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}.done.s-y_bCXRrkrYfP{text-decoration:line-through;color:gray}a.s-y_bCXRrkrYfP{color:black;text-decoration:none}a.s-y_bCXRrkrYfP:hover{opacity:0.5}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!-- js -->\\n<script>\\n    import { firebaseConfig } from \\"$lib/firebaseConfig\\";\\n    import { initializeApp } from \\"firebase/app\\";\\n    import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, writeBatch } from \\"firebase/firestore\\";\\n    import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged } from \\"firebase/auth\\";\\n\\n    const app = initializeApp(firebaseConfig);\\n    const db = getFirestore();\\n    const colRef = collection(db, \\"todos\\");\\n    const provider = new GoogleAuthProvider();\\n    const auth = getAuth();\\n    auth.useDeviceLanguage();\\n\\n    let count = 0;\\n    let todos = [];\\n    let task = \\"\\";\\n    let loggedIn = false;\\n    let uid;\\n    let userName;\\n    let userEmail;\\n\\n    onAuthStateChanged(auth, (user) => {\\n        if(user){\\n            uid = user.uid;\\n            userEmail = user.email;\\n            userName = user.displayName;\\n            loggedIn = true;\\n            let docCount = 0;\\n            const getDoc = onSnapshot(colRef, (querySnapshot) => {\\n                todos = [];\\n                querySnapshot.forEach((doc) => {\\n                    if(doc.data().author == uid){\\n                        let todo = {id: doc.id, ...doc.data()};\\n                        todos = [todo, ...todos];\\n                    }\\n                });\\n                count = todos.length;\\n                todos.sort(function(a, b){\\n                    return b.order - a.order;\\n                });\\n            });\\n        }\\n    })\\n\\n    const login = () => {\\n        signInWithPopup(auth, new GoogleAuthProvider());\\n    }\\n\\n   const logout = () => {\\n        signOut(auth);\\n        loggedIn = false;\\n        uid = \\"\\";\\n        todos = [];\\n        count = 0;\\n   }\\n\\n    const addTodo = async() => {\\n        if(task === \\"\\") return;\\n        await addDoc(colRef, {\\n            order: count+1,\\n            task: task,\\n            isDone: false,\\n            createdAt: new Date(),\\n            author: uid\\n        });\\n        task = \\"\\";\\n    };\\n\\n    const markDone = async(item) => {\\n        await updateDoc(doc(db, \\"todos\\", item.id), {\\n            isDone: !item.isDone\\n        });\\n    };\\n\\n    const deleteTodo = async(item) => {\\n        let temp = item.order;\\n        const batch = writeBatch(db);\\n        await deleteDoc(doc(db, \\"todos\\", item.id));\\n        for(let i = count; i >= temp; i--){\\n            const tempRef = doc(db, \\"todos\\", todos[count-i].id);\\n            batch.update(tempRef, {order: todos[count-i].order-1})\\n        }\\n        await batch.commit();\\n    }\\n\\n    const moveUp = async(item) => {\\n        if(item.order == count) return;\\n        let upper = todos.find(({order}) => order == item.order+1);\\n        const batch = writeBatch(db);\\n        const tempRef1 = doc(db, \\"todos\\", item.id);\\n        batch.update(tempRef1, {order: item.order+1});\\n        const tempRef2 = doc(db, \\"todos\\", upper.id);\\n        batch.update(tempRef2, {order: upper.order-1});\\n        await batch.commit();\\n    };\\n\\n    const moveDown = async(item) => {\\n        if(item.order == 1) return;\\n        let lower = todos.find(({order}) => order == item.order-1);\\n        const batch = writeBatch(db);\\n        const tempRef1 = doc(db, \\"todos\\", item.id);\\n        batch.update(tempRef1, {order: item.order-1});\\n        const tempRef2 = doc(db, \\"todos\\", lower.id);\\n        batch.update(tempRef2, {order: lower.order+1});\\n        await batch.commit();\\n    };\\n\\n    const keyPressed = (e) => {\\n        if(e.key === \\"Enter\\"){\\n            addTodo();\\n        }\\n    }\\n<\/script>\\n\\n<!-- html -->\\n<div class=\\"header\\">\\n<div class=\\"overlay\\">\\n\\n{#if loggedIn}\\n    <p>logged in as {userName} ({userEmail})</p>\\n    <button on:click={logout}>Logout</button>\\n    \\n<hr>\\n\\n<input type=\\"text\\" placeholder=\\"Add Task\\" bind:value={task}>\\n<button on:click={addTodo}>Add</button>\\n\\n<ol>\\n    {#each todos as item}\\n        <li>\\n            <a href=\\"#\\" on:click={() => markDone(item)} class:done={item.isDone}>{item.task}</a>\\n            <span>\\n                <button on:click={() => markDone(item)}>✓</button>\\n                <button on:click={() => deleteTodo(item)}>X</button>\\n                <button on:click={() => moveUp(item)}>^</button>\\n                <button on:click={() => moveDown(item)}>v</button>\\n            </span>\\n        </li>\\n    {:else}\\n        <p>No tasks found</p>\\n    {/each}\\n</ol>\\n{:else}\\n    <p>Not logged in</p>\\n    <button on:click={login}>Login with Google</button>\\n{/if}\\n\\n</div>\\n</div>\\n\\n<svelte:window on:keydown={keyPressed}></svelte:window>\\n\\n<!-- css -->\\n<style>\\n    .header {\\n        padding: 15px;\\n        margin: -15px;\\n        background: linear-gradient(45deg, red, blue);\\n        animation: background 12s ease-in-out infinite;\\n        background-size: 300% 300%;\\n        height: 100%;\\n        width: 100%;\\n        position: fixed;\\n    }\\n\\n    .overlay {\\n        /*background: linear-gradient(red, blue);*/\\n        /*background: linear-gradient(45deg, rgb(210, 0, 26), rgb(116, 98, 255), rgb(244, 142, 33), rgb(25, 213, 171));\\n        animation: background 12s ease-in-out infinite;\\n        background-size: 300% 300%;*/\\n        padding: 15px;\\n        margin: -15px;\\n        background-image: radial-gradient(transparent 3px, black 3px);\\n        background-size: 40px 40px;\\n        height: 100%;\\n        width: 100%;\\n        position: fixed;\\n        color: white;\\n    }\\n\\n    @keyframes background {\\n        0%{\\n            background-position: 0 50%;\\n        }\\n        50%{\\n            background-position: 100% 50%;\\n        }\\n        100%{\\n            background-position: 0 50%;\\n        }\\n    }\\n\\n    .done {\\n        text-decoration: line-through;\\n        color: gray;\\n    }\\n\\n    a {\\n        color: black;\\n        text-decoration: none;\\n    }\\n    a:hover {\\n        opacity: 0.5;\\n    }\\n</style>"],"names":[],"mappings":"AA2JI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC7C,SAAS,CAAE,yBAAU,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAC9C,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,KACd,CAEA,uBAAS,CAKL,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,gBAAgB,WAAW,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,CAC7D,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KACX,CAEA,WAAW,yBAAW,CAClB,EAAE,CACE,mBAAmB,CAAE,CAAC,CAAC,GAC3B,CACA,GAAG,CACC,mBAAmB,CAAE,IAAI,CAAC,GAC9B,CACA,IAAI,CACA,mBAAmB,CAAE,CAAC,CAAC,GAC3B,CACJ,CAEA,oBAAM,CACF,eAAe,CAAE,YAAY,CAC7B,KAAK,CAAE,IACX,CAEA,gBAAE,CACE,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IACrB,CACA,gBAAC,MAAO,CACJ,OAAO,CAAE,GACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, "todos");
  new GoogleAuthProvider();
  const auth = getAuth();
  auth.useDeviceLanguage();
  let todos = [];
  let task = "";
  let loggedIn = false;
  let uid;
  let userName;
  let userEmail;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      userEmail = user.email;
      userName = user.displayName;
      loggedIn = true;
      onSnapshot(colRef, (querySnapshot) => {
        todos = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().author == uid) {
            let todo = { id: doc.id, ...doc.data() };
            todos = [todo, ...todos];
          }
        });
        todos.length;
        todos.sort(function(a, b) {
          return b.order - a.order;
        });
      });
    }
  });
  $$result.css.add(css);
  return `   <div class="header s-y_bCXRrkrYfP"><div class="overlay s-y_bCXRrkrYfP">${loggedIn ? `<p>logged in as ${escape(userName)} (${escape(userEmail)})</p> <button data-svelte-h="svelte-hd9vso">Logout</button> <hr> <input type="text" placeholder="Add Task"${add_attribute("value", task)}> <button data-svelte-h="svelte-15sgq9c">Add</button> <ol>${todos.length ? each(todos, (item) => {
    return `<li><a href="#" class="${["s-y_bCXRrkrYfP", item.isDone ? "done" : ""].join(" ").trim()}">${escape(item.task)}</a> <span><button data-svelte-h="svelte-kbs5j2">✓</button> <button data-svelte-h="svelte-1rsjn6b">X</button> <button data-svelte-h="svelte-1g2t5pe">^</button> <button data-svelte-h="svelte-rcw7lb">v</button></span> </li>`;
  }) : `<p data-svelte-h="svelte-iikpyn">No tasks found</p>`}</ol>` : `<p data-svelte-h="svelte-j7fkyc">Not logged in</p> <button data-svelte-h="svelte-1lyotxv">Login with Google</button>`}</div></div>  `;
});
export {
  Page as default
};
