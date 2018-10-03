---
title: My First Exposure to Javascript Proxies
subTitle: Turn off all your console logs at once
category: "sayings"
cover: photo-1463852247062-1bbca38f7805-cover.jpg
---

#### Code is just text

I came across a [very cool article](https://x-c3ll.github.io/posts/javascript-antidebugging/) today that helped expand my worldview a bit. It's ostensibly about techniques that malware authors use to stop people from figuring out what their code is doing; it can stop them from using the debugger, refuse to execute once they make any changes, etc. 

I'm not planning on building any malware any time soon, but pondering all the code snippets in the article was a great way to stop thinking about Javascript as an immutable collection of functionalities and realize that code itself can be referenced or changed. It seems basic, but just doing something like this:

```
const readMyGuts = () => {
    console.log(readMyGuts.toString())
}

readMyGuts();
```

...is a little bit mindblowing to me. This function prints out its own code! You can use string manipulations to change the code from inside the code!

#### Turn off your console logs

I'll be trying to apply this more meta-type lens to coding problems I run into in the future, but for now I have a cool application that came to mind using Javascript proxies. 

A proxy basically lets you bypass an existing function and call a handler that will execute in its place. 

```
const handleLog = {
    apply: function(target, thisArg, args){
        if (devMode){
            return target.apply(thisArg, args);
        } else {
            return;
        }
    }
}
console.log = new Proxy(console.log, handleLog);  
```

The above code replaces the console.log function with a custom proxy that executes as normal when devMode is true, but exits immediately when devMode is false.

At this point, you can probably see where I'm going with this; if you're anything like me, once you start reaching the end of a Javascript project, you have dozens of console.logs spread throughout dozens of files, and no easy way to take them all out to get your codebase ready for production. The idea here is that you can use the above proxy to replace the functionality of console.log, such that it only actually runs when you set the global variable devMode equal to true.

```
let devMode = false;
console.log('you won\'t see this');

devMode = true;
console.log('hi there');
```


