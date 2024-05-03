
## when the problem of npm version taking place
    1.check the version   ---    node -v    npm -v
    2.clear cache ---  np cache clean -f   
        PS C:\code>  npm cache clean --force
        npm WARN using --force Recommended protections disabled.
        PS C:\code> npm cache verify
        Cache verified and compressed (~\AppData\Local\npm-cache\_cacache)
        Content verified: 0 (0 bytes)
        Index entries: 0
        Finished in 0.008s
    3.update  -----   npm install npm -g   


## basic statement
    npm run dev 
    PS D:\Airbnb\Airbnb_clone\airbnb-video> npm run dev


## how to define the titile and description in the next 13
    modify the reserved constant in the layout.tsx file 
## how to add the font to the body element
    in the file layout.tsx
    import the font pakage 
    create a constant called font and write nunito and open a object inside the parenthesis and add a subset
    then we can expose the classname of font to the body element
    

## how to use tailwind css
    related file: postcss.config.mjs, tailwind.config.ts, globals.css, page.tsx
    in the globals.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
            effect : the padding of the text has been removed because of the direct navs reset css configuration
    in the page.tsx ,add a css tailwind class to the div


## how to add the navbar inside the layout.tsx
    add the <Navbar /> above the children 
    define  ./components/navbar/Navbar and in this tsx file , write the example of navbar content
    in the layout.tsx file, import Navbar from "./components/navbar/Navbar";

## why the Container.tsx defined outside thenavbar folder but the Navbar.tsx define in the folder
    the Container will be reused many times

## how to add the Container inside the Navbar.tsx
    components/Container,return <div>Container!</div>
    in the Navbar.tsx ,import the above file and add <Container></Container>


