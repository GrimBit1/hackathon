import React from "react";

const PlayersSection = () => {
  return (
    <div
      className="bg-white h-screen  flex items-center justify-around bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/2.jpg)",
      }}
    >
      <div className="h-screen w-full px-16 flex items-center justify-around bg-no-repeat bg-cover backdrop-blur-sm">
        <img src="/1.png" alt="" />
        <img src="/3.png" alt="" />
        <p className="w-96 text-white bg-black/15 rounded p-6 font-bold hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          corporis quod, explicabo blanditiis eum doloremque facilis quo,
          voluptatem aliquam, non deserunt eius dolore rem sit? Reprehenderit
          voluptate at porro, beatae optio fuga asperiores consequuntur,
          inventore quia nisi totam ipsa quas cum sint cumque vel facilis iste
          dolorem! Aperiam nihil quod nam beatae hic et laudantium quisquam quas
          at, animi sunt saepe explicabo iste eaque natus. Est ex expedita
          fugiat laboriosam aspernatur asperiores necessitatibus blanditiis
          exercitationem consequatur culpa sint possimus, nulla distinctio
          deleniti! Vero facere est dolorum dicta. Sed laborum ipsum sapiente
          sit quae quod architecto veritatis soluta. Maiores laboriosam nostrum
          eum iste incidunt voluptas libero velit voluptates voluptatum unde
          omnis id itaque quam temporibus fugit excepturi doloribus voluptatibus
          cum, mollitia ipsa non. Numquam est saepe, sit, rerum eligendi
        </p>
      </div>
    </div>
  );
};

export default PlayersSection;
