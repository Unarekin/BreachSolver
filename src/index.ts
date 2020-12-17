import { Matrix } from './matrix';


function maxArrayDimensions(arr: any[]): number[] {

  let secondDimension: number = Math.max(arr.reduce((curr, prev) => {
    return Math.max(prev, (curr.length ?? 0));
  }, 0));

  return [arr.length, secondDimension];
}

export function Solve(grid: string[], protocols: string[]);
export function Solve(grid: string[][], protocols: string[][]);

export function Solve(grid: string[] | string[][], protocols: string[] | string[][]) {
  let actualGrid: string[][] = [];
  let actualProtcols: string[][] = [];


}



function solveForMultiple(grid: string[][], protocols: string[][]) {

}