function navbar(){
    return `<header>
    <div class="container">
        <input type="checkbox" name="" id="check">
        
        <div class="logo-container">
            <img class="logo" src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="">
        </div>

        <div class="nav-btn">
            <div class="nav-links">
                <ul>
                    <li class="nav-link" style="--i: .6s">
                        <a href="/index.html">Home</a>
                    </li>
                    <li class="nav-link" style="--i: .85s">
                        <a href="#">Products<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <a href="/components/products/mindmappage/MindMap.html">Ayoa Mind Map</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="/components/products/taskpage/ayoa_task.html">Ayoa Task</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="/components/products/ultimatepage/ultimate.html">Ayoa Ultimate</a>
                                </li>
                                <div class="arrow"></div>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link" style="--i: 1.35s">
                        <a href="/components/inclusivity/inclusivity.html">Inclusivity</a>
                    </li>
                    <li class="nav-link" style="--i: 1.1s">
                        <a href="#">Resources<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <a href="/components/blog/Blog.html">Ayoa Blog</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="/components/press/press.html">Press & Articles</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Keynote Speaker</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="/components/FooterPages/Help/help.html">Help Center</a>
                                </li>
                                <div class="arrow"></div>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link" style="--i: 1.35s">
                        <a href="/components/pricing/pricing.html">Pricing</a>
                    </li>
                </ul>
            </div>

            <div class="log-sign" style="--i: 1.8s">
                <a href="/components/login/login.html" class="btn transparent">Log in</a>
            </div>
        </div>

        <div class="hamburger-menu-container">
            <div class="hamburger-menu">
                <div></div>
            </div>
        </div>
    </div>
</header>
<main>
    <section>
        <div class="overlay"></div>
    </section>
</main>`
}
export default navbar; 