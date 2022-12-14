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
const getRecipes = function (ingredient, noGluten, noDairy) {
    return __awaiter(this, void 0, void 0, function* () {
        let glutenFree;
        let dairyFree;
        if (noGluten) {
            glutenFree = 'true';
        }
        else {
            glutenFree = 'false';
        }
        if (noDairy) {
            dairyFree = 'true';
        }
        else {
            dairyFree = 'false';
        }
        let recipes;
        recipes = yield $.get(`http://127.0.0.1:8000/recipes?ingredient=${ingredient}&no_dairy=${dairyFree}&no_gluten=${glutenFree}`);
        return recipes;
    });
};
