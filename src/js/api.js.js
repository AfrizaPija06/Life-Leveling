<script>
(function(){
  const $ = (sel,root=document)=>root.querySelector(sel);
  const $$ = (sel,root=document)=>Array.from(root.querySelectorAll(sel));

  function renderHeader(user){
    $("#user-name").textContent = user.name;
    $("#user-rank").textContent = user.rank.toUpperCase();
    $("#streak-num").textContent = user.streak;
    $("#season-tag").textContent = "Season " + window.DUMMY.season;
    $("#level-label").textContent = "Level " + user.level;
    $("#xp-label").textContent = `${user.xp.toLocaleString()} / ${(user.xp+550).toLocaleString()} XP`;
    const pct = Math.min(100, Math.round(user.xp % 1000 / 10)); // dummy
    $("#xp-fill").style.width = pct + "%";
  }

  function renderTodayCard(weekXP){
    const today = weekXP[2] || weekXP[0];
    $("#today-pct").textContent = Math.min(100, Math.round((today.total/220)*100)) + "%";
    $("#today-xp").textContent = `+${today.total} XP`;
  }

  function renderWeeklyBars(weekXP){
    const wrap = $("#weekly-bars");
    wrap.innerHTML = "";
    weekXP.forEach((d)=> {
      const h = Math.min(100, Math.round((d.total/220)*100));
      const col = document.createElement("div");
      col.className="flex-1 flex flex-col items-center";
      col.innerHTML = `
        <div class="w-full bg-gradient-to-t from-gaming-green to-gaming-blue rounded-t" style="height:${Math.max(8, h)}px"></div>
        <span class="text-xs text-gray-500 mt-2">${h}%</span>
      `;
      wrap.appendChild(col);
    });
  }

  function renderLeaderboard(users){
    const sorted = [...users].sort((a,b)=>b.xp - a.xp).slice(0,5);
    const list = $("#lb-list");
    list.innerHTML = "";
    sorted.forEach((u, i)=>{
      const item = document.createElement("div");
      const medal = i===0?"👑":(i===1?"🥈":(i===2?"🥉":(i+1)));
      item.className = "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-2";
      item.innerHTML = `
        <span class="text-xl">${medal}</span>
        <div class="flex-1">
          <div class="font-semibold">${u.name}</div>
          <div class="text-sm text-gray-500">Level ${u.level} • ${u.rank}</div>
        </div>
        <div class="gaming-font text-gray-700 font-bold">${u.xp.toLocaleString()} XP</div>
      `;
      list.appendChild(item);
    });
  }

  // bootstrap (demo untuk u-01)
  document.addEventListener("DOMContentLoaded", ()=>{
    const me = window.DUMMY.users.find(u=>u.id==="u-01");
    const week = window.DUMMY.logs["u-01"].week;
    const weekXP = window.calc.weekXP(week);

    renderHeader(me);
    renderTodayCard(weekXP);
    renderWeeklyBars(weekXP);
    renderLeaderboard(window.DUMMY.users);
  });
})();
</script>
