
// @ts-ignore
import { curry, CurriedFunction2 } from "ramda";
import * as L from "./index";

export { Node, List, list } from "./index";

export const prepend = curry(L.prepend);
export const append = curry(L.append);
export const pair = curry(L.pair);
export const empty = curry(L.empty);
export const repeat = curry(L.repeat);
export const length = curry(L.length);
export const first = curry(L.first);
export const last = curry(L.last);
export const nth = curry(L.nth);
export const map = curry(L.map);
export const range = curry(L.range);
export const foldl = curry(L.foldl);
export const reduce = foldl;
export const foldr = curry(L.foldr);
export const reduceRight = foldr;
export const every = curry(L.every);
export const all = every;
export const some = curry(L.some);
export const any = some;
export const none = curry(L.none);
export const find = curry(L.find);
export const includes = curry(L.includes);
export const contains = includes;
export const concat = curry(L.concat);
export const update = curry(L.update);
export const adjust = curry(L.adjust);
export const slice = curry(L.slice);
export const take = curry(L.take);
export const takeLast = curry(L.takeLast);
export const drop = curry(L.drop);
export const dropLast = curry(L.dropLast);
export const pop = curry(L.pop);
export const init = pop;
export const tail = curry(L.tail);
