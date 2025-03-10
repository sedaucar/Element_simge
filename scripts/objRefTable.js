const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Behaviors.Rotate,
		C3.Plugins.Browser,
		C3.Behaviors.Sin,
		C3.Plugins.Arr,
		C3.Plugins.Audio,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Cnds.Contains,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.PickByHighestLowestValue,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Audio.Acts.SetPaused
	];
};
self.C3_JsPropNameTable = [
	{MoveTo: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Flash: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{background: 0},
	{btnbasla: 0},
	{btnbilgi: 0},
	{bilgi: 0},
	{Touch: 0},
	{Mouse: 0},
	{btnHome: 0},
	{durum: 0},
	{btnMuzik: 0},
	{btnSes: 0},
	{kapla: 0},
	{btnfullscreen: 0},
	{hazirlayanlar: 0},
	{kaynakca: 0},
	{btnhazirlayanlar: 0},
	{btnKaynakca: 0},
	{btnKapat: 0},
	{gameBackground: 0},
	{Rotate: 0},
	{cark: 0},
	{tiklandi: 0},
	{btncevir: 0},
	{Browser: 0},
	{Sine: 0},
	{btnDevam: 0},
	{rastgele: 0},
	{endTebrik: 0},
	{Audio: 0},
	{btnTekrar: 0},
	{isik: 0},
	{Pin: 0},
	{kabin: 0},
	{cevapp: 0},
	{bulut: 0},
	{dogru_yanlis: 0},
	{btnButonlar: 0},
	{butonlarSayfa: 0},
	{butonlar: 0},
	{harf: 0},
	{randomSayi: 0},
	{dogrusayisi: 0},
	{soruNumarasi: 0},
	{donuyor: 0},
	{tur: 0},
	{cevaplar: 0},
	{n: 0},
	{a: 0},
	{secilenElement: 0},
	{dondurTiklama: 0},
	{bulutTiklama: 0}
];

self.InstanceType = {
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {},
	btnbasla: class extends self.ISpriteInstance {},
	btnbilgi: class extends self.ISpriteInstance {},
	bilgi: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnMuzik: class extends self.ISpriteInstance {},
	btnSes: class extends self.ISpriteInstance {},
	btnfullscreen: class extends self.ISpriteInstance {},
	hazirlayanlar: class extends self.ISpriteInstance {},
	kaynakca: class extends self.ISpriteInstance {},
	btnhazirlayanlar: class extends self.ISpriteInstance {},
	btnKaynakca: class extends self.ISpriteInstance {},
	btnKapat: class extends self.ISpriteInstance {},
	gameBackground: class extends self.ISpriteInstance {},
	cark: class extends self.ISpriteInstance {},
	btncevir: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	btnDevam: class extends self.ISpriteInstance {},
	rastgele: class extends self.IArrayInstance {},
	endTebrik: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	btnTekrar: class extends self.ISpriteInstance {},
	isik: class extends self.ISpriteInstance {},
	kabin: class extends self.ISpriteInstance {},
	bulut: class extends self.ISpriteInstance {},
	dogru_yanlis: class extends self.ISpriteInstance {},
	btnButonlar: class extends self.ISpriteInstance {},
	butonlarSayfa: class extends self.ISpriteInstance {},
	butonlar: class extends self.ISpriteInstance {},
	harf: class extends self.ISpriteInstance {}
}