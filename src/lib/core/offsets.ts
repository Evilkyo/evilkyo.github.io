export const offsets = {
  button: {
    inSpeed: 0x07678310,               		// [Buttons]                        -> in_speed
    inAttack: 0x07678368               		// [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x1462450),     		// [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1b37b18),  		// [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x01ee8d50 + 0x8)    	// [Miscellaneous]                  -> //.?AVC_GameMovement@@ + 0x8
  },
  entity: {
    localOrigin: 0x0158,               		// [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x0580,            		// [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a78          		// [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x02c0,     		// [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1648           		// [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x03c0 + 0x8,          		// [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x03c0 + 0x10,    		// [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x044c,                  		// [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x0589,                     		// [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x0798,                 		// [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x24b0,      		// [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x25ac - 0x14,         		// [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x2740,             		// [RecvTable.DT_Player]            -> m_bleedoutState
    zooming: 0x1c51                   		// [RecvTable.DT_Player]            -> m_bZooming
  }
};
