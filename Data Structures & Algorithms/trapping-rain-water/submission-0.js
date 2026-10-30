class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        // left వైపు ఉన్న గోడ చిన్నది కాబట్టి దీనిపై నీటి మట్టం ఆధారపడి ఉంటుంది
        if (height[left] >= leftMax) {
          leftMax = height[left]; // కొత్త max దొరికితే అప్‌డేట్ చేస్తాం
        } else {
          totalWater += leftMax - height[left]; // నీరు నిల్వ ఉండేది కలుపుతాం
        }
        left++;
      } else {
        // right వైపు ఉన్న గోడ చిన్నది
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          totalWater += rightMax - height[right];
        }
        right--;
      }
    }

    return totalWater;

    }
}
