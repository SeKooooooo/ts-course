type Actor={
	name:string,
	firstName: string,
    country: string,
    city: string,
    hasOskar: false,
    filmsCount: number,
    age: string,
    languages: string[],
}

const actor: Actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: '14',
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor:Actor):string => {
    return actor.age + '20';
}
console.log(howOldWillBeActorAfterTwentyYears(actor));