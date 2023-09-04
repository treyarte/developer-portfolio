
export default function ProjectItem() {

    return (
        <div className="flex flex-row ">
            <div className="relative w-[580px] ">
                <div className="w-full absolute top-0 z-0 right-[-25%] rounded-md">
                    <img className="w-full rounded-md"
                        src="/static/images/projects/lava-demo.png" alt="lava demo image" />
                </div>
            </div>
            <div className="min-h-[300px min-w-[500px] pt-14 text-right z-[1]">
                <div className="text-lg text-portfolio-orange">Featured Project</div>
                <h4 className="text-2xl hover:text-portfolio-orange mb-5 w-fit inline-block">
                    <a 
                        href="https://play.unity.com/mg/other/webgl-builds-327790" 
                        target="blank" aria-label="Platformer demo link"
                    >
                        2D Platformer Demo
                    </a>                    
                </h4>
                <p className="max-w-[500px] px-5 py-5 bg-zinc-800 rounded-md mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In repellat officia sint dolores magnam fugiat excepturi esse vel atque recusandae inventore, eaque accusamus obcaecati doloribus ducimus. Aperiam unde ab temporibus.
                </p>
                <ul className="flex flex-row text-right justify-end gap-5">
                    <li>Unity</li>
                    <li>C#/.NET</li>
                    <li>WebGL</li>
                </ul>
            </div>
        </div>
    )
}