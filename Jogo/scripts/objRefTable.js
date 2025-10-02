const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.Physics,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{Física: 0},
	{download: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sólido: 0},
	{Sprite: 0},
	{download2: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	download: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	download2: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}