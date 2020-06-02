//package Recursion and Dynamic;

public class MyClass {
    public static void main(String args[]) {
      int x =5;
      int k = 2;
      System.out.println(binomialCoeff(x,k));
      System.out.println(binomialCoeffDynamic(x,k));
    }
    
    static int binomialCoeff( int n, int k){
      if (k == 0 || k == n)
      return 1;
      return binomialCoeff(n-1,k-1)+ binomialCoeff(n-1,k);
    }
    
    
      static int binomialCoeffDynamic( int n, int k){
          
          int [][] C = new int [n+1][k+1];
          
          
          for(int i = 0; i <= n; i++){
                for (int j = 0; j <= Math.min(i, k); j++) {
                    
                    if(j == 0 || j == i)
                        C[i][j]=1;
                    else
                C[i][j] = C[i-1][j-1] + C[i-1][j]; 
                }
            }
                return C[n][k];
          }
}