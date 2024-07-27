import { useEffect } from "react";
import TagCloud from "TagCloud";
const CustomerWordsCloud = () => {
  useEffect(() => {
    const container:any = ".tagcloud";
      const texts = [
        "Welcome",
        "Later",
        "Thank you",
        "Bad",
        "Love",
        "Good"
      ];
      const options:any = {
        radius: 150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
  }, []);
  return (
    <>
      <div className="text_shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
export default CustomerWordsCloud;
