<template>
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="navigation">
                            <nav class="navbar navbar-expand-md">
                                <NuxtLink class="navbar-brand" to="/"><img src="~assets/images/logo.png" alt="" class="img-fluid" /></NuxtLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link active" to="/">HOME</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/services">SERVICES</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/location">LOCATIONS</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/news">NEWS</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/about-us">ABOUT US</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink class="nav-link pertner-btn" to="/partner">BECOME A PARTNER?</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
header {
background-color: $primary;
padding: 21px 0;
position: relative;
z-index: 999;
.navigation {
max-width: 1230px;
width: 100%;
margin: 0 auto;
.navbar {
    padding: 0;
    width: 100%;
    .navbar-brand {
        padding: 0;
        margin: 0;
        img {
            height: 74px;
        }
    }
    .navbar-nav {
        .nav-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            .nav-link {
                color: $white;
                text-transform: uppercase;
                font-size: $font16;
                @include Red_Hat_Display(500);
                padding: 0 15px;
                &.pertner-btn {
                    @include border_radius(8px);
                    height: 44px;
                    width: 194px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    background-color: $orange;
                    @include Red_Hat_Display(700);
                }
            }
            &:last-child {
                margin-left: 21px;
            }
        }
    }
}
}
}

.header-shape {
position: absolute;
left: 0;
width: 100%;
bottom: -49px;
z-index: 100;
svg {
height: 49px;
transform: translateX(0) rotateY(183deg);
width: calc(100% + 1.3px);
display: block;
}
}

// responsive

@import '~assets/scss/pages.scss/responsive.scss';
</style>
