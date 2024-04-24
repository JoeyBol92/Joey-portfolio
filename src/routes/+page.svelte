<script>
    import Container from '../lib/components/Container.svelte';

</script>

<!-- Intro -->
<div class="py-10">
    <Container>
        <div class="grid max-[768px]:grid-cols-1 grid-cols-2 items-center">
            <div class="px-10">
                <h1 class="text-5xl mb-4">Welcome bij JojoBee!</h1>
                <p>Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en bouwen van websiteprojecten volgens de beunhaas-methode.</p>
                <div class="grid grid-cols-2 item-center gap-4">
                    <div>
                        <button class="mt-4 rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white w-full">
                           My work
                        </button>
                    </div>
                    <div>
                        <button class="mt-4 rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white w-full">
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-auto">
                <img 
                    src="./img/Joey-and-emilio.jpg" alt="Joey"
                    class="rounded-xl h-[650px]"    
                />
            </div>
        </div>
    </Container>
</div>

<!-- Overview services -->
<div class="py-10">
    <Container>

        <div>
            <h2 class="text-4xl mb-4 text-center">Waar ik jou mee kan helpen</h2>
        </div>
        <div class="grid max-[768px]:grid-cols-1 max-[991px]:grid-cols-2 grid-cols-3 gap-6 py-10">
            <!-- Service 1 -->
            <div class="bg-[#EFEFEF] rounded-3xl p-10 flex flex-col items-center">
                <div class="mb-4 flex items-center">
                    <h2 class="text-2xl mr-2">Budget site</h2>
                    <img 
                        src="./img/wordpress-logo.svg" 
                        alt="logo-wordpress"
                        class="w-[50px]"
                    />
                </div>
                <div class="mb-4">
                    <p class="py-6">Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en bouwen van websiteprojecten volgens de beunhaas-methode.</p>

                    <button class="rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white w-full">
                        My work
                    </button>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="bg-[#EFEFEF] rounded-3xl p-10 flex flex-col items-center">
                <div class="mb-4 flex items-center">
                    <h2 class="text-2xl mr-2">Static website</h2>
                    <img 
                        src="./img/svelte-logo.svg" 
                        alt="logo-svelte"
                        class="w-[50px]"
                    />
                </div>
                <div class="mb-4">
                    <p class="py-6">Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en bouwen van websiteprojecten volgens de beunhaas-methode.</p>

                    <button class="rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white w-full">
                        My work
                    </button>
                </div>
            </div>

            <!-- Service 3 -->
            <div class="bg-[#EFEFEF] rounded-3xl p-10 flex flex-col items-center">
                <div class="mb-4 flex items-center">
                    <h2 class="text-2xl mr-2">Headless CMS</h2>
                    <img 
                        src="./img/wordpress-logo.svg" 
                        alt="logo-wordpress"
                        class="w-[50px]"
                    />
                    <img 
                        src="./img/svelte-logo.svg" 
                        alt="logo-svelte"
                        class="w-[50px] ml-2"
                    />
                </div>
                <div class="mb-4">
                    <p class="py-6">Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en bouwen van websiteprojecten volgens de beunhaas-methode.</p>

                    <button class="rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white w-full">
                        My work
                    </button>
                </div>
            </div>
        </div>
        
    </Container>
</div>