public class MyClass {
    public static void main(String args[]) {
      int [] arr = {38,27,43,3,9,82,10};
      System.out.println(mergeSort(arr, 0, arr.length -1));
    }
    
    static int  mergeSort(int [] arr, int low , int high){
       // arr = new int [high + 1];
        
            if( low < high) {
            int mid = (low + high) / 2;
            //Sort left side of array.
            mergeSort(arr, low, mid);
            //Sort right side of Array
            mergeSort(arr, mid + 1, high);
            //Combine Both Sorted Arrays
            merge(arr,low, mid, high);
        }
             return arr;
    }
    
     static void merge(int arr[], int low, int mid, int high) { 
         int i = low;
         int j = mid + 1;
         int k = 0; // From 0: 
         int [] temp = new int [high - low + 1];
         
         while(i <= mid && j <= high){
             if(arr[i] <= arr[j]){
                 temp[k++] = arr[i++];
             }
             else {
                 temp[k++] = arr[j++];
             }
             }
             
             if ( i > mid) {
                 while (j <= high){
                     temp[k++] = arr[j++];
                 }
             }
             else {
                 while(i <= mid) {
                     temp[k++] = arr[i++];
                 }
             }
             
             for (int x = 0, y = low; x < temp.length; x++, y++){
                 arr[y] = temp[x];
             }
          System.out.println(arr);
         }
         
}