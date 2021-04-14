package com.example.demo.Ukesoppgaver5;

import org.springframework.stereotype.Service;

@Service
public class Temperatur {
    private final Integer[] tempArray = new Integer[]{-3,-2,2,7,12,16,18,17,12,7,3,-2};

    public int getTemp(String mnd) {
        switch (mnd) {
            case "Januar":
                return tempArray[0];
            case "Februar":
                return tempArray[1];
            case "Mars":
                return tempArray[2];
            case "April":
                return tempArray[3];
            case "Mai":
                return tempArray[4];
            case "Juni":
                return tempArray[5];
            case "Juli":
                return tempArray[6];
            case "August":
                return tempArray[7];
            case "September":
                return tempArray[8];
            case "Oktober":
                return tempArray[9];
            case "November":
                return tempArray[10];
            case "Desember":
                return tempArray[11];
            default:
                return 0;
        }
    }
}
