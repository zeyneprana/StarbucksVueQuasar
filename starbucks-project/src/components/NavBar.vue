<template>
    <div class="row flex justify-between bg-white items-center fixed-top q-px-xl q-py-md shadow-3 headerNavbar">
        <div class="flex">
            <img style="width: 60px;" src="../assets/starbucks-navbar.png" >
            <ul class="flex list-style-none q-my-auto">
                <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Starbucks Reward</a></li>
                <router-link class="text-decoration-none" :to="{path:'/menu'}"><li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Menü</a></li></router-link>
                <router-link class="text-decoration-none" :to="{path:'/campaigns'}"><li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Kampanyalar</a></li></router-link>
                <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">E-Gift</a></li>
                <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Kurumsal Satış</a></li>
            </ul>
        </div> 
        <div class="flex items-center">
            <div>
                <ul class="flex items-baseline  list-style-none">
                    <li class="">
                        <q-btn color="white" unelevated text-color="black" icon="location_on"  label="Mağazalarımız" />
                    </li>
                    <li class="q-mx-sm ">
                        <q-btn rounded color="green-8 text-weight-bold" label="Alışverişe Başla" />
                    </li>
                </ul>
            </div>
            <div>
                <ul class="flex items-baseline  list-style-none">
                    <li class="">
                        <q-btn outline rounded color="white" class="text-weight-bold" text-color="black" label="Giriş" />
                    </li>
                    <li class="q-mx-sm ">
                        <q-btn rounded color="black" class="text-weight-bold" label="Hemen Katıl" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


