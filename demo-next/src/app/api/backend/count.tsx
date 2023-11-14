import { randomInt } from 'crypto'

export async function getCount() {
    var count: number = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(randomInt(10));
        }, 3000);
    });
    return count;
}