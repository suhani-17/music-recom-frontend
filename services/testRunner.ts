import {getRecommendations} from "./getRecommendations.js";

async function test(){
    const results = await getRecommendations("happy", "english");
    console.log("Recommendations:", results);
}
test();