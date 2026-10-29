class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s1, s2) {

        if (s1.length !== s2.length) return false; // లెంత్ వేరుగా ఉంటే అనగ్రామ్ అవ్వదు

        let freqMap = new Map();

        // 1. మొదటి వర్డ్ కోసం ఫ్రీక్వెన్సీ కౌంట్ పెంచు (+1)
        for (let char of s1) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        // 2. రెండో వర్డ్ కోసం కౌంట్ తగ్గించు (-1)
        for (let char of s2) {
            if (!freqMap.has(char)) return false; // అక్షరమే లేకపోతే ఇంకా అనగ్రామ్ కాదు

            freqMap.set(char, freqMap.get(char) - 1);

            // ఒకవేళ కౌంట్ జీరో అయిపోతే మ్యాప్ నుండి డిలీట్ చేయవచ్చు లేదా అలాగే ఉంచవచ్చు
            if (freqMap.get(char) === 0) {
                freqMap.delete(char);
            }
        }

        // 3. మ్యాప్ పూర్తిగా ఖాళీ అయితే (size === 0), పర్ఫెక్ట్ అనగ్రామ్!
        return freqMap.size === 0;
    }
}
