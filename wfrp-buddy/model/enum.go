package model

type (
	Species     = string
	Class       = string
	WeaponGroup = string

	BookVersion    int
	StatusTier     int
	ArmourLocation int
)

const (
	Core BookVersion = iota
	WindsOfMagic
	UpInArms
)

const (
	Head ArmourLocation = iota
	Body
	LeftArm
	RightArm
	LeftLeg
	RightLeg
	Shield // Shield covers whole body
)

const (
	Brass StatusTier = iota
	Silver
	Gold
)
