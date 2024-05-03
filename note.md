
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

## Optimization for the content in container file
    we want to add content directly in the navbar.tsx rather in the container file 
    define the interface container props,it only include the children atrribute and the type is React.TeactNode ,means accepting anying node in the valid react
    The Container component is implemented as a React function component. We extract the children attribute from the incoming props through destructuring.
    This component renders the received children directly within a <div> element

## sequence for the above optimization 
    When the Navbar component is rendered, React first parses the JSX of the Navbar. When it encounters the Container component, it will pass "anything like this" to the Container as children.
    Container receives this children and wraps it in a div for rendering. Therefore, what you end up seeing in the browser will be a navigation bar fixed to the top of the page, containing the text "anything like this".

## client component
    every component and page we create inside the app folder is a server component by default

## add the logo in the navbar container
    in the navbar.tsx,import Logo from "./Logo"
        add 
                    <div
                    className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                    </div>
    in the logo.tsx
        'use client'
        import the configuration for image 
        create the constant and specific the src
        dont forget to add the export statement


## Search function template 
    in the file Navbar.tsx add the  <Search /> in the container
    besides import Search from "./Search";
    in the file Search.tsx use the client and other botton as the template

## the way to import img
    <AiOutlineMenu />:import {AiOutlineMenu} from 'react-icons/ai'
    import Avatar from '../Avatar';
        in the Avatar.tsx
            'use client';
            import Image from "next/image";
            const Avatar = () => {
                return (
                    <Image
                        className="rounded-full"
                        height="30"
                        width="30"
                        alt="Avatar"
                        src="/images/placeholder.jpg"
                    />
                );
            }
            export default Avatar

## How to implement custom scaling in the page
    when we try and collapse this,it completely responsive on all devices beauriful 
        UserMenu 组件
            这个组件包括两个主要的子组件——一个文本按钮和一个带有图标和头像的按钮。这些组件利用Tailwind CSS的响应式工具类实现在不同屏幕大小下的显示或隐藏。
            
            文本按钮 (Airbnb your home) 在较大屏幕（如平板和桌面，由md:block控制）上显示，而在更小的屏幕上则隐藏（hidden）。这种设计常用于提供只在较大屏幕上需要的额外导航或功能。
            图标按钮 包含一个菜单图标和一个头像，头像在较大屏幕上显示（使用md:block控制）。整个按钮都有点击事件的占位（onClick={() => {}}），可以根据需要实现具体的功能。

        Container 组件
            Container是一个功能性容器组件，用来限制其子元素的最大宽度并根据屏幕大小调整其内边距。它使得页面内容在大屏幕上居中显示，同时在不同设备上保持适当的边距。这种容器是响应式设计的关键部分，确保内容在所有设备上都具有良好的可读性和布局
        Avatar 组件
            这个组件使用Next.js的Image组件来显示一个圆形的头像图片。Image组件用于优化图像加载，并自动处理如缩放和懒加载等功能。
        Logo 组件
            Logo使用Next.js的Image和useRouter钩子。它显示一个logo，并且在较大的屏幕上可见。这个logo被设置为可点击，通常用于导航回主页。这通过useRouter钩子来实现，该钩子提供了路由功能，可以在用户点击logo时进行页面跳转。
        Navbar 组件
            结构和样式
                固定定位：使用className="fixed w-full bg-white z-10 shadow-sm"，这使得导航栏在滚动页面时始终固定在视口顶部。这里的fixed是固定定位，w-full使它宽度为100%，bg-white设置背景色为白色，z-10确保它在页面的上层，shadow-sm为导航栏添加了轻微的阴影，增强视觉层次感。
                内边距和边框：className="py-4 border-b-[1px]"，提供了上下内边距和底部边框，使内容有更好的视觉分隔。
            容器和布局
                Container 组件：用于限制内容宽度和提供一致的内边距，确保导航内容在不同设备上的一致性和对齐。
                布局控制：className="flex flex-row items-center justify-between gap-3 md:gap-0"，这里使用了Flexbox布局，子组件沿水平方向排列，通过justify-between保持等间距排列，items-center保证垂直居中对齐。gap-3在移动视图中提供间隙，md:gap-0在较大屏幕上移除间隙，优化布局。
            子组件
                Logo：通常是公司或网站的标志，可点击跳转回主页。
                Search：提供搜索功能，具体实现未展示，但通常包括一个输入框和可能的搜索按钮。
                UserMenu：展示用户相关的操作或信息，如登录、注册、用户设置等。
            响应式布局
                Tailwind CSS的响应式工具类：
                通过使用md:前缀，Navbar组件的某些样式属性只在中等屏幕尺寸（如平板电脑和部分大屏手机）及以上设备生效。例如，md:gap-0将在较大屏幕上去除元素之间的间隙，而在较小的屏幕上保持gap-3以增加元素间距离，这避免了在小屏幕上的拥挤感。
                此外，某些组件如Avatar在UserMenu中可能只在较大屏幕上显示（使用md:block类），而在小屏幕上隐藏，这有助于优化用户的视觉体验和界面的实用性。
                Flex布局：
                Navbar使用Flexbox来布置子组件（Logo, Search, UserMenu），使用flex-row来水平排列子组件，justify-between确保子组件在容器中均匀分布，items-center则使得所有子组件在垂直方向上居中对齐。这种布局方式非常适合创建现代的导航栏，因为它能够自适应不同的屏幕宽度并保持设计的美观性和功能性。