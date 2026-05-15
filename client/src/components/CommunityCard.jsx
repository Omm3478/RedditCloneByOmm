function CommunityCard({ community }) {

  return (

    <div>

      <h3>{community.name}</h3>

      <p>{community.description}</p>

    </div>
  );
}

export default CommunityCard;