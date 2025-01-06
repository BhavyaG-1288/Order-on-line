


const navbar =`
        <div id="topnav">
            <img src="https://www.pinpng.com/pngs/m/334-3345054_bigbasket-logo-transparent-big-basket-logo-hd-png.png" alt="logo" width="150px">
            <div id ="search-bar">
            <input type="text" id="mySearch" placeholder="Search the site…"size="30"             <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_">
            </div>
                <button id ="location">
                <select>Select location
                <option>Select location</option>
                <option>Visakhapatnam</option>
                <option>Hyderabad</option>
                <option>Bakery,Cakes&Dairy</option>
                <option>Bevarages</option>
                <option>cleaning & Household</option>
                <option>Fashion</option>
                <option>Baby Care</option>
                </select>
          </button>
            <a href="login.html">Login</a>
            <a href ="signup.html">Signup</a>
          <img src="data:image/png;base64,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" alt="basket" width="30px">
        </div>
        <div id ="bottomnav">
            
                <select>Shop by Category
                <option>Shop By Category</option>
                <option>Fruits & Vegtables</option>
                <option>Foodgrains,oil&Masala</option>
                <option>Bakery,Cakes&Dairy</option>
                <option>Bevarages</option>
                <option>cleaning & Household</option>
                <option>Fashion</option>
                <option>Baby Care</option>
                </select>

            <a href="Exotic.html">Exotic Fruits & Veggies</a>
            <a href="Tea.html">Tea</a>
            <a href="Ghee.html">Ghee</a>
            <a href="Nandini.html">Nandini</a>
            <a href="FreshVegitable.html">FreshVegitable</a>
            <div>
            <a href ="smart.html">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/Smart_basket-250124-1.png" width="80px"/>
            </a>
            <a href="offer.html">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png" width="80px"/>
            </a>
            </div>         
            </div>
    </div>`;
    document.getElementById("nav").innerHTML= navbar