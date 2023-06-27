interface IAspect {
  name: string
  description: string
  isDefault: boolean
  image: string
}

interface IAspectSmall extends IAspect {
  id: number
}

interface IAspectКроме extends Omit<IAspect, 'description'> {}

interface IAspectТолько extends Pick<IAspect, 'name' | 'image'> {}

interface IAspectВсеНеобязательные extends Partial<IAspect> {}

interface IAspectВсеОбязательные extends Required<IAspect> {}

interface IAspectТолькоДляЧтения extends Readonly<IAspect> {}

type TAspectДляСпецифичнойЗаписи = Record<'name' | 'description', string>

type TAspectПересечение = Extract<'red' | 'black', 'black' | 'green'>
type TAspectНеПересечение = Exclude<'red' | 'black', 'black' | 'green'>
