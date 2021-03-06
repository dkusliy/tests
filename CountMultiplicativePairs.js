function solution(A, B) {
    var scale = 1000000;
    var N = A.length;
    var count=0;
    var left = 0;
    var right = N-1;
    var C_left = 0;

    while(left<right){
      //to avoid rounding errors, use multiplication
        C_left = A[left]*scale+B[left];

    	if(C_left>=scale){

	    if(C_left*(A[right]*scale+B[right])>=(C_left+(A[right]*scale+B[right]))*scale){
  	        count+=right-left;
	        right--;					
  	    }else{
	  	left++;							
	    }						
    	}else{
    	    left++;
	}
    }
    if(count>1000000000)
        return 1000000000;
    else{
        return count;
    }
}
