# Neural_from_scratch_typescript

### Objective : learn TS (for js dev)

---

## TECHNO

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## LAUNCH

```shell
npx ts-node src/app.ts
```

---

## DOC

### TYPES EXAMPLES

```ts
number
number[]
string
boolean
[[number,string]]
```


### COMPOSING TYPES EXAMPLES

```ts
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
```

### INTERFACE EXAMPLES

```ts
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

instead of

```ts
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```




