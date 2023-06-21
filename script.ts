// TASK #1: Տրված է խառը տիպերով լցված զանգված, գտնել առաջին "string" տիպ ունեցող էլեմենտի ինդեքսը ()

function findFirstStringIndex(params: any[]): number {
  return params.findIndex((elem) => typeof elem === "string");
}
const result = findFirstStringIndex([
  true,
  "ookinncd",
  false,
  1,
  2,
  3,
  4,
  "abc",
  "def",
  "ghi",
  null,
]);
console.log(result);

//  TASK #2: Ստեղծել Shuffle ֆունկցիան, որը կստանա կամայական զանգված, "կխառնի" այն պատահական ձևով  և կվերադարձնի այն։

function suffleFunction(params: string[]): string[] {
  return params.sort(() => Math.random() - 0.5);
}

const res = suffleFunction(["a", "b", "c", "d", "e", "f", "g"]);
console.log(res);

// TASK #3: Տրված է թվային զանգված, ստանալ նույն զանգվածը որտեղ կլինեն նույն թվերի խորանարդները

function changeNumbersValue(params: number[]): number[] {
  return params.map((elem) => Math.pow(elem, 3));
}

const answer = changeNumbersValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(answer);

// TASK #4: jsonplaceholder- ից ստալան բոլոր users -ին, `fetch`- ով առանձին պետք է տիպայնացնեք այդ user-ի զանգվածը և `fetch`-ը

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function getUsersFromServer(): Promise<IUsers[]> {
  const response = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return response;
}

const allUsers = getUsersFromServer();
console.log(allUsers);

// TASK #4: ՈՒնենալ թվային զանգված և տպել այդ զանգվածի 2-րդ ամենամեծ թիվը և վերադարձնել այն

function secondBiggestNumber(params: number[]): number {
  return params.sort((a, b) => a - b).slice(-2)[0];
}
const answer1 = secondBiggestNumber([
  2, 4, 6, 8, 0, 12, 13, 65, 99, 6114, 15, 19,
]);
console.log(answer1);
