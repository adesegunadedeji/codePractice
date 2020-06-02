public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=3;
      System.out.println(permutationCoeff(x,y));
    }
    
    static int permutationCoeff(int n, int k){
     int [][] pArr = new int [n+1][k+1];
     
     for(int i = 0; i <=n; i++){
         
         for(int j = 0; j <= Math.min(i,k); j++){
            if (j> i)
             pArr[i][j] = 0;
             
            if(j==0)
                 pArr[i][j] = 1;
            else
             pArr[i][j] =  pArr[i-1][j] + j* pArr[i-1][j-1];
             
         }
         }
     return pArr[n][k];
    }
}