"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let glutenFree = false;
let dairyFree = false;
$("#gluten-filter").on("click", function () {
    glutenFree = $("#gluten").is(":checked");
});
$("#dairy-filter").on("click", function () {
    dairyFree = $("#dairy").is(":checked");
});
$("#search-button").on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let ingredient = $("#ingredient").val();
        let recipes = yield getRecipes(ingredient, glutenFree, dairyFree);
        renderRecipes(recipes);
    });
});
