import { getTeamList } from "@/apiList/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

export default async function Team() {
  const teamlist = await getTeamList();

  return (
    <div>
      <Header background={`bg-light-green-200-bg`} />

      <section className="heronav bg-light-green-200-bg pt-16 pb-20">
        <div className="container mx-auto">
          <h4 className="plus_jakarta_sans text-f40 font-semibold mb-6 text-light-gray/900">
            Team
          </h4>
          <div className="flex items-center space-x-5">
            <span className="plus_jakarta_sans text-f16 font-semibold ">
              Home
            </span>
            <span className="plus_jakarta_sans text-f16 font-semibold ">
              {" "}
              <BsChevronRight />
            </span>
            <span className="plus_jakarta_sans text-f16 font-semibold text-light-green-text">
              Team
            </span>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16">
        <div className="mb-10">
          <h5 className="text-light-green-text uppercase text-f20 font-medium mb-5">
            Our Team Member
          </h5>
          <h2 className="text-f30 font-semibold lg:max-w-[480px]">
            Check our awesome team members
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamlist.map((team) => (
            <div
              key={team.id}
              className="relative rounded-2xl bg-white shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)]"
            >
              <div className="relative m-0 overflow-hidden rounded-none bg-transparent">
                <img
                  src={team.image}
                  alt="team card"
                  className="rounded-t-2xl object-cover w-full"
                />
                <div className="absolute bottom-5 left-[33%] min-w-max mx-auto bg-white px-3 py-2 rounded-3xl flex justify-between items-center divide-x divide-[#E3E3E3]">
                  <a target="_blank" href={team.facebook}>
                    <BiLogoFacebook color="#737588" size="18"  className="mx-2"/>
                  </a>
                  <a target="_blank" href={team.twitter}>
                    <BiLogoTwitter color="#737588" size="18" className="mx-2"/>
                  </a>
                  <a target="_blank" href={team.instagram}>
                    <BiLogoInstagramAlt color="#737588" size="18"  className="mx-2"/>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-center text-f30 font-semibold text-light-gray/900">
                  {team.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
}
