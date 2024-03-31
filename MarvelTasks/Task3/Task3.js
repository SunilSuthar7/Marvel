let is_rice_available=true;

let recipe=(time,work)=>{
    return new Promise((resolve, reject) => {
        if(is_rice_available){
            setTimeout(()=>{
                resolve(work());
            },time);
           
        }
        else{
            reject(console.log("Rice not available"));
        }
    });
};

recipe(2000,()=>console.log("The recipe for veg biryani is as follows:"))

.then(()=>{
    return recipe(1000,()=>console.log("1. Wash the rice thoroughly."));
})

.then(()=>{
    return recipe(2000,()=>console.log("2. Heat 2 tbsp of oil in a pan and add onions."));
})

.then(()=>{
    return recipe(3000,()=>console.log("3. In the same pan, add the ginger-garlic paste and sauté for a minute."));    
})

.then(()=>{
    return recipe(2000,()=>console.log("4. Add the chopped tomatoes and cook until they turn soft and mushy."));
})

.then(()=>{
    return recipe(3000,()=>console.log("5. Stir in the mixed vegetables and cook for a few minutes until they are slightly tender."));
})

.then(()=>{
    return recipe(2000,()=>console.log("6. In a small bowl, whisk the yogurt with turmeric powder, red chili powder, and garam masala. Pour this mixture into the pan and mix well with the vegetables."));
})

.then(()=>{
    return recipe(1000,()=>console.log("7. Add the soaked and drained rice to the pan along with 4 cups of water. Season with salt according to your taste."));
})

.then(()=>{
    return recipe(2000,()=>console.log("8. Bring the mixture to a boil, then reduce the heat to low. Cover the pan with a lid and let it simmer for about 15-20 minutes, or until the rice is cooked and all the water is absorbed."));
})

.then(()=>{
    return recipe(1000,()=>console.log("9. Once the rice is cooked, turn off the heat and let the biryani sit for another 5 minutes. Then, gently fluff the rice with a fork."));
})

.then(()=>{
    return recipe(1000,()=>console.log("10. Garnish the biryani with the reserved fried onions, chopped coriander leaves, and mint leaves."));
})

.catch(()=>{
    console.log("Tummy unhappy");
})

.finally(()=>{
    console.log("The end")
});
