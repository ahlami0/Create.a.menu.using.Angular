import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // المتغيرات
  title = 'Menu1';
  total=0;
  qty=0;
  prodname="";

  // قائمة المنتجات
  Prodmenu=[
    {id:1,name:"حلق ألماس ليبوريه",price:250,description:" حلق ",img:"/assets/img/a1.png"},
    {id:2,name:"سلسال كريستال كارديال",price:300,description:"سلسال ",img:"/assets/img/a2.png"},
    {id:3,name:"خاتم ألماس كارديال",price:150,description:"خاتم",img:"/assets/img/a3.png"},
    {id:4,name:"ساعة نسائية بوس كلوب",price:450,description:"ساعة",img:"/assets/img/a4.png"}
  ]
  // دالة البحث
  filter(Prodmenu:any[]){
    return Prodmenu.filter(item=>item.name.includes(this.prodname));
  }
  // دالة  تزيد أو تقلل السعر الإجمالي والكمية بناءً على تحديد أو إلغاء تحديد عنصر
  sum(event:any ,price:number)
  {
    const isChecked:boolean=event.target.checked;
    if(isChecked) {
      this.total=this.total+price;
      this.qty+=1;
    }

    else {
      this.total=this.total-price;
      this.qty-=1;
    }
  }
}
