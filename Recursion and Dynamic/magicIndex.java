public class MyClass {
    public static void main(String args[]) {
     int[] A = { -4, 0, 1, 2, 4, 10 };
        System.out.println(magicIndex(A));
        System.out.println(magicBinarySearch(A));
    }
    
    static int magicIndex(int [] n){
        for(int i = 0; i < n.length; i++){
            if(n[i] == i)
            return i;
        }
     return -1;
    }
    
    
    static int magicBinarySearch(int [] arr){
        return magicBinarySearch(arr, 0, arr.length-1);
    }
    
    static int magicBinarySearch(int [] arr, int start, int end) {
        
        if (end < start)
        return -1;
        int mid = (start + end)/ 2; 
        if (arr[mid] == mid) {
        return mid;
        }
        else if(arr[mid] > mid){
            return magicBinarySearch(arr, start, mid -1);
        }
        else{
              return magicBinarySearch(arr, mid +1, end);
        }
        
    }
}