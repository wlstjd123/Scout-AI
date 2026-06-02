function PlayerProfile({
  summoner,
  tier,
  rank,
  lp,
  winRate,
  profileIconId,
  level,
  tierStatus,
}) {
  const iconUrl = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${profileIconId}.png`;

  const tierStatusMap = {
    FOUND: "조회 완료",
    UNRANKED: "랭크 기록 없음",
    UNAVAILABLE: "조회 불가",
    FAILED: "조회 실패",
  };

  const tierImageMap = {
    IRON: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/iron.png",
    BRONZE:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/bronze.png",
    SILVER:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/silver.png",
    GOLD: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/gold.png",
    PLATINUM:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/platinum.png",
    EMERALD:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/emerald.png",
    DIAMOND:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/diamond.png",
    MASTER:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/master.png",
    GRANDMASTER:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/grandmaster.png",
    CHALLENGER:
      "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/challenger.png",
  };

  const tierImage =
    tierImageMap[tier] ||
    "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/unranked.png";

  return (
    <div style={boxStyle}>
      <img src={iconUrl} alt="프로필 아이콘" style={iconStyle} />

      <div>
        <h1 style={nameStyle}>{summoner}</h1>

        <p style={levelStyle}>레벨 {level}</p>

        <div style={tierRowStyle}>
          <img src={tierImage} alt="티어 이미지" style={tierImageStyle} />

          <div>
            <p style={tierStyle}>
              {tier} {rank}
            </p>

            <p style={lpStyle}>{lp} LP</p>
          </div>
        </div>

        <p style={winStyle}>승률 {winRate}%</p>

        {tierStatus !== "FOUND" && (
          <p style={noticeStyle}>
            티어 API 상태: {tierStatusMap[tierStatus] || tierStatus}
          </p>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  background: "#0f172a",
  padding: "40px",
  borderRadius: "25px",
  border: "1px solid #1e293b",
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

const iconStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "20px",
};

const nameStyle = {
  margin: 0,
  color: "white",
  fontSize: "40px",
};

const levelStyle = {
  color: "#94a3b8",
  marginTop: "10px",
};

const tierRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginTop: "15px",
};

const tierImageStyle = {
  width: "70px",
  height: "70px",
  objectFit: "contain",
};

const tierStyle = {
  margin: 0,
  color: "#22d3ee",
  fontSize: "22px",
  fontWeight: "bold",
};

const lpStyle = {
  color: "#84cc16",
  marginTop: "5px",
  marginBottom: 0,
};

const winStyle = {
  color: "#facc15",
  marginTop: "15px",
};

const noticeStyle = {
  color: "#f97316",
  marginTop: "10px",
  fontSize: "14px",
};

export default PlayerProfile;
