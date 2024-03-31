let recipe=(prep)=>{
    prep();
    setTimeout(()=>{
        console.log("1. Wash the rice thoroughly." )
        setTimeout(()=>{
            console.log("2. Heat 2 tbsp of oil in a pan and add onions.")
            setTimeout(()=>{
                console.log("3. In the same pan, add the ginger-garlic paste and sauté for a minute.")
                setTimeout(()=>{
                    console.log("4. Add the chopped tomatoes and cook until they turn soft and mushy.")
                    setTimeout(()=>{
                        console.log("5. Stir in the mixed vegetables and cook for a few minutes until they are slightly tender.")
                        setTimeout(()=>{
                            console.log("6. In a small bowl, whisk the yogurt with turmeric powder, red chili powder, and garam masala. Pour this mixture into the pan and mix well with the vegetables.")
                            setTimeout(()=>{
                                console.log("7. Add the soaked and drained rice to the pan along with 4 cups of water. Season with salt according to your taste.")
                                setTimeout(()=>{
                                    console.log("8. Bring the mixture to a boil, then reduce the heat to low. Cover the pan with a lid and let it simmer for about 15-20 minutes, or until the rice is cooked and all the water is absorbed.")
                                    setTimeout(()=>{
                                        console.log("9. Once the rice is cooked, turn off the heat and let the biryani sit for another 5 minutes. Then, gently fluff the rice with a fork.")
                                        setTimeout(()=>{
                                            console.log("10. Garnish the biryani with the reserved fried onions, chopped coriander leaves, and mint leaves. Serve hot with raita (yogurt dip) or your favorite side dish.")
                                        },2000)
                                    },1000)
                                },2000)
                            },3000)
                        },2000)
                    },4000)
                },3000)
            },3000)
        },2000)
    },1000)
};

let preparation=()=>{
    console.log("The recipe for vegetable biryani is as follows:")
};

recipe(preparation);