public class MyClass {
    public static void main(String args[]) {
      System.out.println(coinChange(4, new int [] {1,2}));
    }
    
    
    static int coinChange( int amount ,int [] arr){
        int [] combinations = new int [amount + 1];
        
        combinations[0] = 1;
        for(int i = 0; i < arr.length; i++) {
            for(int j = 1; j < combinations.length; j++){
                if(j >= arr[i]){
                    combinations[j] += combinations[j -arr[i]];
                }
            }
            
        }
        return combinations[amount];
     
    }
}