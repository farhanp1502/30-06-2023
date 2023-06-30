import { of } from 'rxjs'
export let dt1 = "true";
export let dt2 = 3;
export let dt3 = "farhan";
export let dt4 =  [{name:"farhan",course:"bca"},{name:"abhi",course:"bcom"}];
export let request =  [{name:"farhan",course:"bca"},{name:"abhi",course:"bcom"}];
export let response = {
  status: 200,
  headers: {
    title:"this is war everything is fair in love and war and this is world war 3",
    author: "by rajkumar hirani"
  },
  data1: [
    {name: "farhan",course: "bca"},{
      name:"arjun",course: "bcom"
    }
  ]

}
export  let  a = of('name');