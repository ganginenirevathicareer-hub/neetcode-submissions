class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // 1. ఒకవేళ అరే ఖాళీగా ఉంటే, నీరు నిలవదు కాబట్టి 0 రిటర్న్ చేస్తాం
        if (!height || height.length === 0) return 0;

        let left = 0;                         // అరే మొదట్లో ఉండే పాయింటర్
        let right = height.length - 1;        // అరే చివర్లో ఉండే పాయింటర్
        let leftMax = 0;                      // ఎడమ వైపు నుంచి వచ్చే గరిష్ట గోడ ఎత్తు
        let rightMax = 0;                     // కుడి వైపు నుంచి వచ్చే గరిష్ట గోడ ఎత్తు
        let totalWater = 0;                   // మొత్తం నిలిచిన నీటిని జమ చేయడానికి

        // 2. రెండు పాయింటర్లు ఒకదానికొకటి ఎదురుగా వచ్చే వరకు లూప్ నడుస్తుంది
        while (left < right) {

            // 3. ఎడమ వైపు గోడ, కుడి వైపు గోడ కంటే చిన్నదా అని చూస్తాం
            if (height[left] < height[right]) {

                // ఒకవేళ ఎడమ వైపు ఉన్న గోడ, ఇప్పటివరకు ఉన్న leftMax కంటే ఎక్కువ ఉంటే అప్‌డేట్ చేస్తాం
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    // లేదంటే, ఆ పొజిషన్ దగ్గర నీరు నిలుస్తుంది కాబట్టి దాన్ని totalWater కి కలుపుతాం
                    totalWater += leftMax - height[left];
                }
                left++; // ఎడమ పాయింటర్‌ని ముందుకు జరుపుతాం

            } else {
                // కుడి వైపు గోడ చిన్నదిగా ఉన్నప్పుడు ఇదే లాజిక్ రైట్ సైడ్ చేస్తాం
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--; // కుడి పాయింటర్‌ని వెనక్కి జరుపుతాం
            }
        }

        // 4. లెక్కించిన మొత్తం నీటిని రిటర్న్ చేస్తాం
        return totalWater;

    }
}
