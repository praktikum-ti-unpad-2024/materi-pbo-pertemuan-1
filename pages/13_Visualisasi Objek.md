# Visualisasi Object dari Class

```java {all}
public class Test {
  public static void main(String args[]){
    Ship ferry1 = new Ship();
    Ship ferry2 = new Ship();
    Ship ferry3 = new Ship();

    ferry1.setCrew(15);
    ferry2.setCrew(25);
    ferry3.setCrew(45);
  }
}
```
<div class="flex space-x-6">
  <!-- Ship 1 -->
  <div class="relative w-80 h-60">
    <img src="/img/kapal.png" alt="Ship 1" class="w-full h-full object-contain">
    <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
      ferry1 : Crew = 15
    </span>
  </div>

  <!-- Ship 2 -->
  <div class="relative w-80 h-60">
    <img src="/img/kapal.png" alt="Ship 2" class="w-full h-full object-contain">
    <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
      ferry2 : Crew = 25
    </span>
  </div>

  <!-- Ship 3 -->
  <div class="relative w-80 h-60">
    <img src="/img/kapal.png" alt="Ship 3" class="w-full h-full object-contain">
    <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
      ferry3 : Crew = 45
    </span>
  </div>
</div>
