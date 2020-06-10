public class MyClass {
    public static void main(String args[]) {
      int x=7;
      System.out.println(tilingRecursion(x));
    System.out.println(tileDynamic(x));
    }
    
    static int tilingRecursion (int n){
        if(n == 1)
        return 1;
        if(n == 2)tilin
        return 2; 
        return tilingRecursion(n - 1) + tilingRecursion(n-2);
    }
    
    static int tileDynamic(int n){
        int [] arr = new int [n+1];
        
        arr[0] = 1;
        arr[1] = 2;
        
        for(int i = 2; i < n; i++){
        arr[i] = arr[i-2]+ arr[i-1];
        }
         return arr[n-1];
    }
   
}