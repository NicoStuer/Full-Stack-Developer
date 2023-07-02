import "./App.css";
import { TwiterFollowCard } from "./assets/TwitterFollowCard";

export default function App() {
  return (
    <section className="App">
      <TwiterFollowCard isFollowing userName={"kikobeats?ttl=1h"}>
        Nico
      </TwiterFollowCard>
      <TwiterFollowCard
        isFollowing={false}
        userName={"kikobeats?ttl=1h"}
        name={"Nico"}
      >
        Nico
      </TwiterFollowCard>
      <TwiterFollowCard isFollowing userName={"kikobeats?ttl=1h"}>
        Nico
      </TwiterFollowCard>
      <TwiterFollowCard isFollowing userName={"kikobeats?ttl=1h"}>
        Nico
      </TwiterFollowCard>
    </section>
  );
}
