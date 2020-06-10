public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int  [] arr= {3,7,4,6,5};
      System.out.println(maxSubsetSum(arr));
    }
    
  static int maxSubsetSum(int[] arr) {
        if(arr==null || arr.length==0)
        return 0;
        int n = arr.length;
         if(n==1)   
       return arr[0];
       int [] newArr = new int [n];
       //Base Case: 
       newArr[0] = arr[0];
       int currentMax = Math.max(newArr[0], arr[1]);
       newArr[1] = currentMax;

       for(int i = 2; i < n; i++){
           currentMax = Math.max(arr[i]+ newArr[i - 2], currentMax);
           currentMax = Math.max(arr[i], currentMax);
           newArr[i] = currentMax;


       }
    return newArr[n-1];
    }
}