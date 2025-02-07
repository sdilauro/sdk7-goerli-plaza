import { engine, executeTask, Material } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'

import { createCube } from './factory'
import { bounceScalingSystem, circularSystem, spawnerSystem } from './systems'

import { setupUi } from './ui'

// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(spawnerSystem)
engine.addSystem(bounceScalingSystem)

// Initial function executed when scene is evaluated and after systems are created
export function main() {
  // Create my main cube and color it.
  const cube = createCube(8, 1, 8)
  Material.setPbrMaterial(cube, { albedoColor: Color4.create(1.0, 0.85, 0.42) })
  setupUi()
}
