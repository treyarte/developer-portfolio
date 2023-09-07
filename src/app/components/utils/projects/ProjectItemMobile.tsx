import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectItemMobile() {
    return (
        <div className="md:hidden bg-[url('/static/images/projects/lava-demo.png')] bg-cover rounded-md">
            <div className="min-h-[300px pt-14 z-[1] px-10 py-5 bg-zinc-800 rounded-md bg-opacity-80">
                <div className="text-lg text-portfolio-orange">Featured Project</div>
                <h4 className="text-2xl hover:text-portfolio-orange mb-5 w-fit inline-block">
                    <a 
                        href="https://play.unity.com/mg/other/webgl-builds-327790" 
                        target="blank" aria-label="Platformer demo link"
                    >
                        2D Platformer Demo
                    </a>                    
                </h4>
                <p className="max-w-[500px] mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In repellat officia sint dolores magnam fugiat excepturi esse vel atque recusandae inventore, eaque accusamus obcaecati doloribus ducimus. Aperiam unde ab temporibus.
                </p>
                <ul className="flex flex-row text-right justify-end gap-5">
                    <li>Unity</li>
                    <li>C#/.NET</li>
                    <li>WebGL</li>
                </ul>
                <ul className="flex flex-row">
                    <li>
                        <a target="blank" href="https://github.com/treyarte/2d-platform-tutorial" 
                            className="text-xl cursor-pointer hover:text-zinc-300">
                                <GitHubIcon/>
                        </a>                       
                    </li>
                </ul>
            </div>
        </div>
    )
}