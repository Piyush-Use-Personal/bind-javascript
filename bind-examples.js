const myObject = {
    name: 'test',
    run: function(){
        console.log('this will run some CPU exhaustive calls')
    },
    print: function() {
        this.run()
    }
}
const myAnotherObject = {
    name: 'another',
    run: function(){
        console.log('this will print few lines')
    },
}
const method = myObject.print
const newPrint = method.bind(myAnotherObject)
// newPrint()

class Test {
    constructor(name){
        this.name = name
    }
    print(){
        console.log(`my name is: ${this.name}`)
    }
}

const t1 = new Test('test')
const t2 = new Test('another')

const print = t1.print.bind(t2)
// print()

const arrowPrint = () => {
    console.log(`name: ${this.name}`)
}

const newArrowMethod = arrowPrint.bind(t1)
newArrowMethod()

class Project {
    constructor(name, onChange){
        this.onChange = onChange
        this.name = name
    }
    update(){
        console.log('project is updated')
        this.onChange('some parameter')
    }
}

class Projects {
    constructor(){
        this.projects = []
        this.length = 0
    }
    add(name){
        const project = new Project(name, this.save.bind(this))
        this.projects.push(project)
        this.length++
        return project
    }
    run(){
        return this.length
    }
    save(p1){
        console.log('saving the projects:', p1, ' length is: ', this.run())
    }
}

const projects = new Projects()
const p1 = projects.add('first')
const p2 = projects.add('second')
p1.update()