import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		minify: false,
		lib: {
			name: 'testPkg',
			fileName: 'test-pkg',
			formats: ['es', 'cjs', 'umd'],
			entry: 'src/main.ts'
		}
	},
	plugins: [
		dts({ rollupTypes: true })
	]
})
